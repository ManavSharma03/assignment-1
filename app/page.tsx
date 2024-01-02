"use client"
import { fetchMockQuotes } from './services/mockQuotes'
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CharacterCounter from '@/components/character-counter';
import TimeConvertor from '@/components/time-convertor';
import RandomQuotes from '@/components/random-quotes';


export default function Home() {



  return (
    <>

      <div className='container'>

        <Tabs defaultValue="solution1" className="w-[400px]">
          <div className='content-container'>
            <TabsList>
              <TabsTrigger value="solution1">Solution 1</TabsTrigger>
              <TabsTrigger value="solution2">Solution 2</TabsTrigger>
              <TabsTrigger value="solution3">Solution 3</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="solution1">
            <div className='content-container'>
              <TimeConvertor />
            </div>
          </TabsContent>
          <TabsContent value="solution2">
            <div className='content-container'>
              <CharacterCounter />
            </div>
          </TabsContent>
          <TabsContent value="solution3">
            <div className='content-container'>
              <RandomQuotes />
            </div>
          </TabsContent>
        </Tabs>
      </div>

    </>
  )
}
