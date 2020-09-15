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

        <p>Panna is a Dublin based, self-taught watercolour artist born in 1987 in Budapest, Hungary.</p>

        <p>She spent her
          childhood summers in the country, at Lake Balaton, where she got the chance
          to connect to nature through activities like fishing and playing near water.
          She didn't get far from the wilderness back in the city either, where she
          lived close to the river Danube, next to the nature reserve in the Northern
          part of the city. These years spent getting scratches and bumps while being
          outside show their influence in her art as she learnt how to observe nature.</p>

        <p>In 2009 she graduated from college where with a major in English Literature
          and Culture, writing her thesis on "Dragons in Celtic Mythology and Literature",
          which marked her interest in the supernatural and Celtic culture. However,
          from there she started a career in software development, which she learnt on
          her own during college years.
        </p>

        <div css={style.image} className="first">
          <Image
              img={data.me_at_work.childImageSharp.fluid}
              alt="Panna at work while her boss is supervising the job done"
              caption="Panna at work while her boss is supervising the job done"
          />
        </div>

        <p>After trying herself in many artistic hobbies from wooden ship models,
          cross-stitching and sewing, in 2019 she heard the call for her true passion,
          painting. While working in software she was drawn towards digital art, but
          because spending most of her time in front of a screen she found
          more artistic excitement and challenge in traditional media.</p>

        <div css={style.image} className="second">
          <Image
              img={data.my_workspace.childImageSharp.fluid}
              alt="Panna sketching 'The Robin'"
              caption="Panna sketching 'The Robin'"
          />
        </div>

        <p>Panna is focusing on birds in her figurative paintings, which subjects combine
          her love for adventure and nature and the passion for painting animals,
          spiced with a hint of the supernatural. She loves going out and taking her own
          reference photos as she considers this part of the creative process, while it
          also makes her familiar with her subjects. Getting to know these birds helps
          her in her quest of finding our place, as humans, in this world, finding a
          connection with nature. With the advancement of civilisation she feels there's
          an ever growing gap between us and the natural world, and to build a bridge over
          that she reaches for supernatural beliefs, folklore and legends from times when
          people depended much more on the environment.</p>

        <div css={style.image} className="third">
          <Image
              img={data.me_hunting.childImageSharp.fluid}
              alt="Panna on the hunt at the Bull Island bird sanctuary"
              caption="Panna on the hunt at the Bull Island bird sanctuary"
          />
        </div>

        <p>Panna's paintings invite you to see beyond what is obvious, forget about what
          you believe to be real, and lose yourself in the stories these pictures depict.
          While the figures are always in the center of attention, highlighted with
          comic-book-style-influenced ink outlines, the background often hints at the
          human  existence, showing the faint silhouettes of buildings, or sometimes
          ruins, pointing out the age of the stories used. Watercolour adds a lightness
          to her compositions, balancing the harsh outlines, while the eeriness of
          nature, some darkness, a threat always lingers in there as well.</p>

        <p>The heroes of these artworks are everyday birds, but their character is brought
          out to almost make them talk to you, to tell you their stories. While they
          are pleasing to the eye and their overall aesthetics wants to be enjoyable, a
          darkness is there, warning you life is not just beauty, and fairy tales can
          become horror stories in a blink. Nature is ruthless after all.</p>

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
