import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { breakPoints } from '../resources/breakpoints';
import { fonts } from '../resources/fonts';
import Image from '../components/Image';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      me_at_work: file(relativePath: { eq: "me_at_work.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      my_workspace: file(relativePath: { eq: "me_studio_3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      me_hunting: file(relativePath: { eq: "me_hunting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const style = {
    pageContainer: css`
      margin: 0 auto;
      display: flex;
      align-items: flex-start;
      justify-content: stretch;
      font-family: ${fonts.f2};
      padding-top: 20px;
      
      flex-direction: column;
      max-width: 800px;
      padding-left: 10px;
      padding-right: 10px;
      @media ${breakPoints.tabletPortrait} {
        flex-direction: row;
        padding-left: 15px;
        padding-right: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        max-width: 1000px;
        padding-left: 0;
        padding-right: 0;
      }
      
      h1 {
        font-family: ${fonts.f1};
        text-transform: uppercase;
        
        font-size: 1.3em;
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.4em;
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
          margin-bottom: 20px;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2em;
        }
      }
      
      h2 {
        font-family: ${fonts.f1};
        text-transform: uppercase;
        
        font-size: 1.3em;
        margin-top: 20px;
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.4em;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 2em;
          margin-top: 40px;
          margin-bottom: 20px;
        }
      }
      
      p {
        font-size: 1.2em;
        
        margin-bottom: 10px;
        @media ${breakPoints.tabletPortrait} {
          margin-bottom: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-bottom: 20px;
        }
      }
    `,
    mainImgContainer: css`
      flex:1;
      max-width: 200px;
      width: 100%;
      margin: 0 auto 20px;
      
      @media ${breakPoints.tabletPortrait} {
        transform: rotate(-8deg);
        margin-right: 45px;
        margin-bottom: 0;
      }
      @media ${breakPoints.desktopSmall} {
        margin-right: 50px;
      }
    `,
    image: css`
      max-width: 400px;
      margin: 40px auto;
      
      &.first,
      &.third {
        @media ${breakPoints.tabletPortrait} {
          transform: rotate(2deg);
        }
      }
      
      &.second {
        @media ${breakPoints.tabletPortrait} {
          transform: rotate(-2deg);
        }
      }
    `,
    textContainer: css`
      flex: 1;
    `,
  };

  return (
  <Layout>
    <SEO title="About PannaDraws - Bio of Panna Zsamba" />
    <div css={style.pageContainer}>
      <script>
        fbq('track', 'About');
      </script>
      <div css={style.mainImgContainer}>
        <Image img={data.me.childImageSharp.fluid} alt="Panna Zsamba watercolour artist"/>
      </div>
      <div css={style.textContainer}>
        <h1>I paint birds. And sometimes mystical creatures. Are the two separate at all?</h1>

        <p>I’m Panna Zsamba, a self-taught watercolour artist based in Dublin, Ireland.</p>

        <p>I was born in Hungary, where I first I studied
          English literature and culture at college, while I took freelance web
          development jobs during those years. Graduating from there I became a
          software engineer. In a different way this career fulfilled my creative passion,
         but I couldn't hold in the real itch to create fine art, which burst out in my
         early 30s. I decided then to focus more on fine art.</p>

        <p>I started with landscapes, but I was missing something. I wanted to have activity
          in my scenes. Figurative art just broke its way out of me eventually.</p>

        <div css={style.image} className="first">
          <Image
              img={data.me_at_work.childImageSharp.fluid}
              alt="Panna at work while her boss is supervising the job done"
              caption="Me at work while my boss is supervising the job done"
          />
        </div>

        <p>I mostly use watercolour as my primary medium, though I tend to experiment
          with coloured pencils a lot lately. As a kid I loved comic books, which shows
          in my style. My work is defined by harsh ink outlines and vivid colours I use
          in most paintings, the former inspired by traditional comic book and manga
          inking.</p>

        <div css={style.image} className="second">
          <Image
              img={data.my_workspace.childImageSharp.fluid}
              alt="Me sketching 'The Robin'"
              caption="Me sketching 'The Robin'"
          />
        </div>

        <p>I take my reference photos myself where possible. I want to fully own the experience
          each painting holds. All the adventures of getting to the spot, waiting for the right
          moment, the shutter sound, and eventually the artistic process are all in there in
          each piece.</p>

        <div css={style.image} className="third">
          <Image
              img={data.me_hunting.childImageSharp.fluid}
              alt="Panna on the hunt at the Bull Island bird sanctuary"
              caption="Me on the hunt at the Bull Island bird sanctuary"
          />
        </div>

        <p>My choice of subject is usually inspired by folklore and myths, while I also
          love to capture the beauty of animals and wildlife around me, especially birds. I'm
         lucky to have the origins in a country that is so deeply connected to myths, and
         also to live in another place now, where the same can be told. I learnt to open an eye
         to see the fairy magic in the small everyday things. Believe me, it's there!</p>

        <h2>My Statement</h2>

        <p>I paint because I can't sit on my butt.</p>

        <p>This sounds odd from an artist and someone who also works in software, however,
          not being able to sit in one place for a long time kickstarted my artistic career
          by providing the inspiration for my subject matter. I love nature, and whenever
          I can I'm outside. I've loved observing animal behaviour from an early age.
          I focus mostly on birds as they represent adventure for me with their capability
          of flight.</p>

        <p>My art is also a search. I feel a connection between all living things, and
          I want to point that out, to say THIS is it, though I haven't been able to.
          When I paint I'm searching for the definition of this connection. This search
          is what brings in the supernatural into my work, as I think old myths and
          legends, folk tales present elements that are trying to do the same, that
          is to make sense of our place in this world by explaining the unexplainable.</p>

        <p>I choose watercolour and ink as materials to capture my subjects because
          these light mediums provide a fairy-tale-like atmosphere to my work. This
          lightness is balanced by the sharp outlines of figures, inspired by superhero
          comic and manga books of my childhood. I love strong contrasts and defined
          figures so most of my subjects are represented in a dramatic manner.</p>

        <p>We humans are the stories we have. The stories already written come alive in my
          paintings, and there are many more adventures out there to lead me on this search.</p>

      </div>
    </div>
  </Layout>
)};

export default AboutPage
