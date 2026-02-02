import Layout from '../../components/layout/index'
import Three from '../../components/organisms/home/three'
import Seven from '../../components/organisms/home/seven'
import Eight from '../../components/organisms/home/eight'
import Nine from '../../components/organisms/home/nine'
import One from '../../components/organisms/about/one'
import Five from '../../components/organisms/about/five'
import ThreeAbout from '../../components/organisms/about/three'
import Two from '../../components/organisms/about/two'

const Index = () => {
  return (
    <Layout>
      <One />
      <Two />
      <ThreeAbout />
      <Three />
      <Five />
      <Seven />
      <Eight />
      <Nine />
    </Layout>
  )
}

export default Index
