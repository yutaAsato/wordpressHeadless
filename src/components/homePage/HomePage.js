/** @jsx jsx */
import React from "react"

//emotions
import { jsx, Global, css, ThemeProvider, useTheme } from "@emotion/react"
import styled from "@emotion/styled"

//gatsby
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

//styled
import {
  BorderLine,
  HomeTextWraper,
  HomeTextBlock,
} from "../../utils/emotionLib"

//framer-motion
import { motion } from "framer-motion"

//components
import { FadeWhenVisible } from "../../utils/fadeInWhenVisible"

//framerAnimations
import {
  stagger,
  longBorder,
  rightBlockH4,
  shortBorder,
  leftBlockH4,
} from "../../utils/framerAnimations"

//==============================================

function HomePage() {
  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <div css={{ paddingBottom: "200px" }}>
        <SectionOne />
      </div>

      <SectionTwo />
    </div>
  )
}

export { HomePage }

//SectionOne
function SectionOne() {
  return (
    <motion.div
      css={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateRows: "repeat(2, 1fr, 2fr, minMax(300px ,1fr))",
      }}
      animate="animate"
      initial="initial"
      variants={stagger}
    >
      <div>
        <div css={{ paddingBottom: "10px", position: "relative" }}>
          <BorderLine
            css={{ borderBottom: "white solid 2px" }}
            initial={{ width: "0rem", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
          />
        </div>

        <motion.div css={{ display: "flex" }} variants={stagger}>
          <HomeTextWraper variants={stagger}>
            <HomeTextBlock>
              <BorderLine
                css={{ width: "150px", borderBottom: "2px solid black" }}
                variants={shortBorder}
              />
              <motion.h4 css={{ color: "white" }} variants={leftBlockH4}>
                LOREN IPUS
              </motion.h4>
            </HomeTextBlock>
            <HomeTextBlock>
              <BorderLine
                css={{ width: "150px", borderBottom: "2px solid black" }}
                variants={shortBorder}
              />
              <motion.h4 variants={leftBlockH4}>NEQUE PORRO </motion.h4>
            </HomeTextBlock>
          </HomeTextWraper>

          <HomeTextWraper variants={stagger}>
            <HomeTextBlock>
              <BorderLine variants={longBorder} />
              <motion.h4 variants={rightBlockH4} css={{ color: " white" }}>
                LOREN IPUS
              </motion.h4>
            </HomeTextBlock>
            <HomeTextBlock>
              <BorderLine variants={longBorder} />
              <motion.h4 variants={rightBlockH4}>NEQUE PORRO </motion.h4>
            </HomeTextBlock>
          </HomeTextWraper>
        </motion.div>
      </div>

      <div
        css={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <motion.div
          css={{ maxWidth: "900px" }}
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.4,
            delay: 0,
            ease: [0.17, 0.77, 0.55, 0.97],
          }}
        >
          <StaticImage
            src="../../images/vintageWriters.jpg"
            alt="writer"
            placeholder="blurred"
          />
        </motion.div>

        <div
          css={{
            paddingLeft: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            justifyContent: "space-between",
          }}
        >
          <div>
            <motion.div
              initial={{ x: 600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            >
              <h3> --> TOKYO BLOGS</h3>
            </motion.div>
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
            >
              <h3>Claire Bower</h3>
            </motion.div>
          </div>

          <div
            css={{
              alignSelf: "flex-end",
            }}
          >
            <motion.h4
              css={{ lineHeight: "1.1rem", maxWidth: "500px" }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 1.7, ease: "easeInOut" }}
            >
              Donec quam libero, ullamcorper eget rhoncus a, porttitor sed odio.
              In eu tristique eros. Curabitur eget lacinia metus. Cras dictum
              lectus in leo sodales tempor. Vivamus suscipit congue cursus.
              Vivamus tincidunt accumsan elit eget laoreet. Pellentesque
              pulvinar rutrum risus et cursus. Nam lectus diam, sollicitudin non
              neque vitae, efficitur faucibus quam
            </motion.h4>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

//Sectiontwo
function SectionTwo() {
  return (
    <div css={{ width: "100%", height: "100%" }}>
      <div
        css={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          css={{
            display: "flex",
            paddingBottom: "10rem",
            justifyContent: "space-between",
          }}
        >
          <div css={{ position: "relative" }}>
            <StaticImage
              src="../../images/university-in-tokyo.jpg"
              alt="writer"
              placeholder="blurred"
            />
            <FadeWhenVisible
              custom={{
                visible: {
                  opacity: 0,
                  x: 200,
                  zIndex: 3,
                  top: 0,
                  position: "absolute",
                },
                hidden: { opacity: 1 },
              }}
            >
              <span
                css={props => ({
                  width: "100%",
                  height: "100%",
                  display: "block",
                  position: "absolute",
                  backgroundColor: props.text,
                  top: 0,
                  zIndex: 3,
                })}
              ></span>
            </FadeWhenVisible>
          </div>

          <div css={{ maxWidth: "500px" }}>
            <p>
              Nulla nec consectetur metus, at pharetra nunc. Ut quis nunc eu
              lorem auctor interdum id consectetur turpis. Morbi in finibus
              erat, et pulvinar nunc. Donec sodales est lectus, nec vulputate
              eros fringilla a. Donec ante libero, posuere et neque quis,
              commodo tristique dolor.Sed urna nisl, vulputate hendrerit mattis
              id, bibendum et ante. Suspendisse luctus eu lectus id varius. Cras
              auctor eleifend ex eget elementum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam eleifend sit amet lectus id
              bibendum. In elit justo, mattis at urna ut, gravida ultrices
              ipsum. Phasellus tristique dui sit amet mi gravida gravida.
            </p>
          </div>
        </div>

        <div
          css={{
            display: "flex",
            paddingBottom: "10rem",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <div css={{ position: "relative", maxWidth: "728px" }}>
            <StaticImage
              src="../../images/vintageWriters.jpg"
              alt="writer"
              placeholder="blurred"
            />
            <FadeWhenVisible
              custom={{
                visible: {
                  opacity: 0,
                  x: -200,
                  zIndex: 3,
                  top: 0,
                  position: "absolute",
                },
                hidden: { opacity: 1 },
              }}
            >
              <span
                css={props => ({
                  display: "block",
                  position: "absolute",
                  backgroundColor: props.text,
                  width: "100%",
                  height: "100%",
                  top: 0,
                  zIndex: 3,
                })}
              ></span>
            </FadeWhenVisible>
          </div>
          <div css={{ maxWidth: "500px" }}>
            <p>
              Nulla nec consectetur metus, at pharetra nunc. Ut quis nunc eu
              lorem auctor interdum id consectetur turpis. Morbi in finibus
              erat, et pulvinar nunc. Donec sodales est lectus, nec vulputate
              eros fringilla a. Donec ante libero, posuere et neque quis,
              commodo tristique dolor.Sed urna nisl, vulputate hendrerit mattis
              id, bibendum et ante. Suspendisse luctus eu lectus id varius. Cras
              auctor eleifend ex eget elementum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam eleifend sit amet lectus id
              bibendum. In elit justo, mattis at urna ut, gravida ultrices
              ipsum. Phasellus tristique dui sit amet mi gravida gravida.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
