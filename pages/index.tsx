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
import axios from 'axios'

interface IndexProps {
  pageConfig?: any
}

const Index = ({ pageConfig }: IndexProps) => {
  return (
    <Layout>
      <One />
      <Two />
      {/* Replace Three with the animated OurNumbers component */}
      <OurNumbers content={content.home} />
      <Six />
      <Five />
      <Four />
      <Seven />
      <Ten />
      <Eight />
      <Nine />
    </Layout>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const config = {
    method: 'GET',
    url: 'http://localhost:3000/api/hello',
  }
  const response = await axios(config)
  return {
    props: {
      pageConfig: response.data,
    },
  }
}

export default Index