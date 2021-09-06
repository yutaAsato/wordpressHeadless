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

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

//==============================================

function HomePage() {
  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <div
        css={{
          paddingBottom: "200px",
          [mq[0]]: {
            paddingBottom: "50px",
          },
        }}
      >
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
          <div
            css={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
            }}
          >
            <HomeTextWraper variants={stagger}>
              <HomeTextBlock>
                <BorderLine
                  css={{ borderBottom: "2px solid black" }}
                  variants={shortBorder}
                />
                <motion.h4
                  css={{
                    color: "white",
                    [mq[0]]: {
                      fontSize: "13px",
                    },
                  }}
                  variants={leftBlockH4}
                >
                  MY
                </motion.h4>
              </HomeTextBlock>
              <HomeTextBlock>
                <BorderLine
                  css={{ borderBottom: "2px solid black" }}
                  variants={shortBorder}
                />
                <motion.h4
                  variants={leftBlockH4}
                  css={{
                    [mq[0]]: {
                      fontSize: "13px",
                    },
                  }}
                >
                  LOVE{" "}
                </motion.h4>
              </HomeTextBlock>
            </HomeTextWraper>

            <HomeTextWraper variants={stagger}>
              <HomeTextBlock>
                <BorderLine variants={longBorder} />
                <motion.h4
                  variants={rightBlockH4}
                  css={{
                    color: " white",
                    [mq[0]]: {
                      fontSize: "13px",
                    },
                  }}
                >
                  CATS
                </motion.h4>
              </HomeTextBlock>
              <HomeTextBlock>
                <BorderLine variants={longBorder} />
                <motion.h4
                  variants={rightBlockH4}
                  css={{
                    [mq[0]]: {
                      fontSize: "13px",
                    },
                  }}
                >
                  ICE CREAM{" "}
                </motion.h4>
              </HomeTextBlock>
            </HomeTextWraper>
          </div>
        </motion.div>
      </div>

      <div
        css={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          [mq[0]]: {
            display: "contents",
          },
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
            sizes="1000px"
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
              css={{
                lineHeight: "1.1rem",
                maxWidth: "500px",
                [mq[0]]: {
                  fontSize: "13px",
                },
              }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 1.7, ease: "easeInOut" }}
            >
              “Where the Internet is about availability of information, blogging
              is about making information creation available to anyone.”
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
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
          css={{
            display: "flex",
            paddingBottom: "10rem",
            justifyContent: "space-between",
            [mq[0]]: {
              display: "contents",
            },
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
                  backgroundColor: props.cover,
                  top: 0,
                  zIndex: 3,
                })}
              ></span>
            </FadeWhenVisible>
          </div>
          <div
            css={{
              maxWidth: "500px",
              [mq[0]]: {
                fontSize: "13px",
              },
            }}
          >
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
        </motion.div>

        <div
          css={{
            display: "flex",
            paddingBottom: "10rem",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            [mq[0]]: {
              display: "contents",
            },
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
                  backgroundColor: props.cover,
                  width: "100%",
                  height: "100%",
                  top: 0,
                  zIndex: 3,
                })}
              ></span>
            </FadeWhenVisible>
          </div>
          <div
            css={{
              maxWidth: "500px",
              [mq[0]]: {
                fontSize: "13px",
              },
            }}
          >
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
