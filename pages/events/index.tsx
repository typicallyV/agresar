import Layout from '../../components/layout'

/* Events Sections */
import One from '../../components/organisms/events/one'
import ImageContentLayout from '../../components/organisms/events/imageContentLayout'
import SevenEvents from '../../components/organisms/events/seven'

/* Be Ek Be Section */
import Four from '../../components/organisms/be-ek-be/four'

/* Home Sections */
import Three from '../../components/organisms/home/three'
import Six from '../../components/organisms/home/six'
import Seven from '../../components/organisms/home/seven'
import Eight from '../../components/organisms/home/eight'
import Nine from '../../components/organisms/home/nine'

import { content } from '../../constants/content'

const Index = () => {
  return (
    <Layout>

      {/* 1 */}
      <One />

       

      {/* 3 */}
      <ImageContentLayout
        content={content?.events?.three}
        background="#FFFCF3"
      />
<ImageContentLayout
        content={content?.events?.six}
        background="#FFFCF3"
      />
      {/* 4 */}
      

     

       

      {/* 7 */}
      <SevenEvents />
      
      <Seven />
      <Eight />
      <Nine />

    </Layout>
  )
}

export default Index