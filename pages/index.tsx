import One from '../components/organisms/home/one'
import Two from '../components/organisms/home/two'
import Three from '../components/organisms/home/three'
import Four from '../components/organisms/home/four'
import Five from '../components/organisms/home/five'
import Six from '../components/organisms/home/six'
import Seven from '../components/organisms/home/seven'
import Eight from '../components/organisms/home/eight'
import Nine from '../components/organisms/home/nine'
import Ten from '../components/organisms/home/ten'
import Layout from '../components/layout'
import OurNumbers from '../components/home/OurNumbers'
import { content } from '../constants/content'

const Index = () => {
  return (
    <Layout>
      <One />
      
      {/* Add spacing between sections */}
      <div className="my-24">
        <Two />
      </div>
      
      <div className="my-24">
        <OurNumbers content={content.home} />
      </div>
      
      <div className="my-32">
        <Six />
      </div>
      
      <div className="my-24">
        <Five />
      </div>
      
      <div className="my-24">
        <Four />
      </div>
      
      <div className="my-24">
        <Seven />
      </div>
      
      <div className="my-24">
        <Ten />
      </div>
      
      <div className="my-24">
        <Eight />
      </div>
      
      <div className="my-24">
        <Nine />
      </div>
    </Layout>
  )
}

export default Index