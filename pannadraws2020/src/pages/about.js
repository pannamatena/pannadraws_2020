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
      my_workspace: file(relativePath: { eq: "my_workspace.jpg" }) {
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
      
      &.first {
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
        <h1>I paint and draw fantasy creatures, birds and wildlife.</h1>

        <p>I’m Panna Zsamba, a self-taught watercolour artist based in Dublin, Ireland.</p>

        <p>I have always been an artistic person and entertained myself by doodling ever since I was
          a child, however, my focus hadn't been on art from the beginning. I was born in Hungary, where I first I studied
          English literature and culture at college, though I took freelance web
          development jobs during those years. Graduating from there I became a
          software engineer. In a different way this career fulfilled my creative passion,
         but I couldn't hold in the real itch to create fine art, which burst out in my
         early 30s. I decided then to take my artistic self seriously, and to the next level.</p>

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
              alt="Panna's workspace, where the magic happens"
              caption="My workspace, where the magic happens"
          />
        </div>

        <p>My choice of subject is usually inspired by folklore and myths, while I also
          love to capture the beauty of animals and wildlife around me, especially birds. I'm
         lucky to have the origins in a country that is so deeply connected to myths, and
         also to live in another place now, where the same can be told. I learnt to open an eye
         to see the fairy magic in the small everyday things. Believe me, it's there!</p>

        <h2>My Statement</h2>

        <p>I work as a fantasy and animal artist because I have always been fascinated by
        the beasts of stories of my childhood and myths in my readings in later life.</p>
        <p>Part of my inspiration comes from novels and stories, but wildlife constantly affects me
        in almost all everyday situations, like a walk to the grocery store, or just
        looking at my bird feeder through the kitchen window.</p>
        <p>I choose watercolour and ink as materials to capture my subjects because these light mediums
          provide a fairy-tale-like atmosphere to my work. This lightness is balanced by the sharp
          outlines of figures, inspired by superhero comic and manga books of my childhood.</p>
        <p>A bird is a symbol of freedom. The supernatural lets you escape reality.
          When painting, my subjects work as a stress relief for me, so I can get lost in the magical world I create.</p>

      </div>
    </div>
  </Layout>
)};

export default AboutPage
