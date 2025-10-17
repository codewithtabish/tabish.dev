'use client'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import React from 'react'

const Clicker = () => {
  return (
    <div className='my-10 z-50 space-y-6'>
      
      {/* Card with background pattern visible */}
      <Card >

        <CardHeader>Demo Card</CardHeader>
        <CardContent>
          This is a card with semi-transparent background so the pattern shows through.
        </CardContent>
      </Card>

      {/* Button with background pattern visible */}
      <div className=''>
        <Button
          onClick={() => alert('yes')}
          className='bg-pattern-shade'
        //   className="bg-background/80 dark:bg-background/50 backdrop-blur-sm border border-border"
        >
          Click Me
        </Button>
      </div>

    </div>
  )
}

export default Clicker
