import { Modal, ModalProps, Text } from '@ems-ignite/react'
import { ProjectProps } from '../../Projects'
import * as S from './ProjectModal.styled'

interface ProjectModalProps extends Partial<ModalProps> {
  project: ProjectProps
  onClose: () => void
}

const ProjectModal = ({ project, onClose, ...rest }: ProjectModalProps) => {
  return (
    <S.ProjectModal>
      <Modal {...rest} width={600} onOpenChange={onClose} title={project.title}>
        <img src={`/projects/${project.id}.png`} alt={project.title} />

        <Text className='inter' size='xs'>
          {project.techs}
        </Text>

        <Text size='sm' className='inter'>
          {project.details}
        </Text>
      </Modal>
    </S.ProjectModal>
  )
}

export default ProjectModal
