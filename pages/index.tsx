import React from 'react'
import Banner from '../components/Banner/Banner'
import RecentBlogSection from '../components/RecentBlogSection/RecentBlogSection'
import TrendingBlogsSection from '../components/TrendingBlogsSection/TrendingBlogsSection'

export default function Home() {
  return (
    <>
      <Banner />
      <TrendingBlogsSection />
      <RecentBlogSection />
    </>
  )
}
