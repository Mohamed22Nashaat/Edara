import React from 'react'
import { ResponsiveContainer, BarChart , Bar ,XAxis, Tooltip } from 'recharts'
import bookStatics from '../assets/book.data/bookStatics'

const BookChart = () => {
  return (
    <ResponsiveContainer width='100%' >
                <BarChart data={bookStatics}>
                  <XAxis dataKey='name' stroke="#2884ff"/>
                  <Bar dataKey='bookstats' stroke='#2884ff' fill='#2884ff'
                  barSize={30}/>
                  <Tooltip wrapperClassName='tooltip_style' cursor={false}/>
                </BarChart>
              </ResponsiveContainer>
  )
}

export default BookChart;