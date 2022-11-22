import Layout from "../components/Layout"
import styled from "styled-components"
import ProjectItem from "../components/projectItem/projectItem"

const Projects = () => {
  return (
    <Layout>
      <ProjectContainer>
        <h2>나의 프로젝트</h2>
        <ProjectItem/>
      </ProjectContainer>
    </Layout>
  )
}

export default Projects

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 3%;
`