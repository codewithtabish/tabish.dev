"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  DragEndEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender,
  Row,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  IconGripVertical,
  IconDotsVertical,
  IconEdit,
  IconEye,
  IconTrash,
} from "@tabler/icons-react";
import { Blog } from "@/types";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { toast } from "sonner";

// ----------------------------
// Drag Handle Component
// ----------------------------
function DragHandle({ id }: { id: string }) {
  const { attributes, listeners } = useSortable({ id });
  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="text-muted-foreground size-7 hover:bg-transparent"
    >
      <IconGripVertical className="size-3" />
    </Button>
  );
}

// ----------------------------
// Dashboard Data Table Component
// ----------------------------
export function DashboardDataTable({ data: initialData }: { data: Blog[] }) {
  const [data, setData] = React.useState(initialData);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedSlug, setSelectedSlug] = React.useState<string | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data.map((b) => b.id),
    [data]
  );

  // ----------------------------
  // Delete Blog via API
  // ----------------------------
  const handleDelete = async (slug: string) => {
    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "DELETE",
      });
      const result = await res.json();

      if (res.ok && result.success) {
        setData((prev) => prev.filter((item) => item.slug !== slug));
        toast.success(result.message);
      } else {
        toast.error(result.message || "Failed to delete blog");
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setDialogOpen(false);
      setSelectedSlug(null);
    }
  };

  const table = useReactTable({
    data,
    columns: React.useMemo<ColumnDef<Blog>[]>(
      () => [
        {
          id: "drag",
          header: () => null,
          cell: ({ row }) => <DragHandle id={row.original.id} />,
        },
        {
          accessorKey: "title",
          header: "Blog",
          cell: ({ row }) => (
            <div className="flex items-center gap-3">
              {row.original.imageUrl ? (
                <Image
                  src={
                    row.original.imageUrl.startsWith("http")
                      ? row.original.imageUrl
                      : `/uploads/${row.original.imageUrl}`
                  }
                  alt={row.original.title}
                  width={50}
                  height={50}
                  className="rounded-md object-cover w-12 h-12 border"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-md" />
              )}
              <div className="flex flex-col">
                <Link
                  href={`/blogs/${row.original.slug}`}
                  className="font-medium hover:underline line-clamp-1"
                >
                  {row.original.title}
                </Link>
                <span className="text-sm text-gray-500 max-w-[280px] truncate">
                  {/* {row.original.shortDescription || "No description"} */}
                </span>
              </div>
            </div>
          ),
        },
        {
          accessorKey: "category",
          header: "Category",
          cell: ({ row }) => (
            <Badge variant="outline" className="capitalize">
              {row.original.category || "Uncategorized"}
            </Badge>
          ),
        },
        {
          id: "actions",
          header: "Actions",
          cell: ({ row }) => (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex size-8 text-muted-foreground"
                    size="icon"
                  >
                    <IconDotsVertical />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-36">
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/dashboard/blogs/edit/${row.original.slug}`}
                      className="flex items-center gap-2"
                    >
                      <IconEdit className="size-4" /> Edit
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href={`/blogs/${row.original.slug}`}
                      className="flex items-center gap-2"
                    >
                      <IconEye className="size-4" /> Preview
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="text-red-600 flex items-center gap-2 cursor-pointer"
                    onClick={() => {
                      setSelectedSlug(row.original.slug);
                      setDialogOpen(true);
                    }}
                  >
                    <IconTrash className="size-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ),
        },
      ],
      []
    ),
    getCoreRowModel: getCoreRowModel(),
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((prev) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  function DraggableRow({ row }: { row: Row<Blog> }) {
    const { transform, transition, setNodeRef, isDragging } = useSortable({
      id: row.original.id,
    });

    return (
      <TableRow
        ref={setNodeRef}
        data-dragging={isDragging}
        className="relative data-[dragging=true]:opacity-75"
        style={{
          transform: CSS.Transform.toString(transform),
          transition,
        }}
      >
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-background">
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <Table>
          <TableHeader className="bg-muted sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            <SortableContext
              items={dataIds}
              strategy={verticalListSortingStrategy}
            >
              {table.getRowModel().rows.map((row) => (
                <DraggableRow key={row.id} row={row} />
              ))}
            </SortableContext>
          </TableBody>
        </Table>
      </DndContext>

      {/* AlertDialog */}
      <AlertDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setSelectedSlug(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The blog post will be permanently
              deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => selectedSlug && handleDelete(selectedSlug)}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
