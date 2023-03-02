import Feature from '../../components/Feature'
import Collection from '../../components/Collection'
import HeroCenter from '../../components/HeroCenter'
import Details from '../../components/Details'
import ImageBar from '../../components/ImageBar'

const Dashboard = () => {
  return (
    <div>
      <div>
        <div className='hero' />
      </div>
      <div>
        <Feature />
      </div>
      <div className='bordes'>
        <Collection />
      </div>
      <div>
        <HeroCenter />
      </div>
      <div className='bordes'>
        <Details />
      </div>
      <div>
        <ImageBar />
      </div>
    </div>
  )
}

export default Dashboard
