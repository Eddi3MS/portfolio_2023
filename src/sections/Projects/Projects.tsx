import { Box, Button, Heading, Text } from '@ems-ignite/react'
import { Fade } from 'react-awesome-reveal'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import useTranslation from '../../hooks/useTranslation'
import porjectsTexts from './projects.json'
import * as S from './Projects.styled'

import Image from 'next/image'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { ProjectModal } from './components'

export interface ProjectProps {
  id: number
  title: string
  techs: string
  details: string
}

interface ModalProps {
  show: boolean
  project?: ProjectProps
}

const Projects = () => {
  const [modal, setModal] = useState<ModalProps>({
    show: false,
  })

  const currLocale = useTranslation(porjectsTexts.lang)

  const handleCloseModal = () => {
    setModal({
      show: false,
    })
  }

  const handleOpenModal = (project: ProjectProps) => {
    setModal({
      show: true,
      project,
    })
  }

  return (
    <>
      <S.Projects id="2">
        <Fade cascade className="z5">
          <Heading size="3xl">{currLocale.title}</Heading>
        </Fade>
        <div className="wrapper">
          <Swiper
            centeredSlides
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="projects__slider"
            speed={1000}
            breakpoints={{
              350: { slidesPerView: 1, spaceBetween: 8 },
              768: { slidesPerView: 1.6, spaceBetween: 16 },
            }}
          >
            {currLocale.projects?.map((project) => (
              <SwiperSlide key={project.id}>
                <Box className="project__card">
                  <Image
                    src={`/projects/${project.id}.png`}
                    alt=""
                    width={410}
                    height={215}
                  />
                  <div>
                    <Heading as="h3" className="inter">
                      {project.title}
                    </Heading>
                    <Text className="inter" size="xs">
                      {project.techs}
                    </Text>

                    <Button onClick={handleOpenModal.bind(this, project)}>
                      Details
                    </Button>
                  </div>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-navigation">
            <div className="swiper-button-prev">
              <CaretLeft size={32} weight="bold" />
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next">
              <CaretRight size={32} weight="bold" />
            </div>
          </div>
        </div>
      </S.Projects>

      {modal.show && modal.project ? (
        <ProjectModal
          open={modal.show}
          project={modal.project}
          onClose={handleCloseModal}
        />
      ) : null}
    </>
  )
}

export default Projects
