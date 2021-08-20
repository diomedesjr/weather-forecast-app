import React from 'react'
import Freesolo from 'src/Components/searchbar'
import CenteredGrid from 'src/Components/weatherforecast'

const Home: React.FC = () => {
  return (
    <div>
      <Freesolo />
      <CenteredGrid />
    </div>
  )
}
export default Home
