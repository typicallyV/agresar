import Layout from '../../components/layout'
import Seven from '../../components/organisms/home/seven'
import Eight from '../../components/organisms/home/eight'
import Nine from '../../components/organisms/home/nine'
import One from '../../components/organisms/events/one'
import ImageContentLayout from '../../components/organisms/events/imageContentLayout'
import SevenEvents from '../../components/organisms/events/seven'
import { content } from '../../constants/content'

const Index = () => {
  return (
    <Layout>
      <One />
      <ImageContentLayout content={content?.events?.two} reverse />
      <ImageContentLayout
        content={content?.events?.three}
        background="#FFFCF3"
      />
      <ImageContentLayout content={content?.events?.four} reverse />
      <SevenEvents />
      <ImageContentLayout
        content={content?.events?.five}
        background="#FFFCF3"
      />
      <ImageContentLayout content={content?.events?.six} reverse />
      <Seven />
      <Eight />
      <Nine />
    </Layout>
  )
}

export default Index
