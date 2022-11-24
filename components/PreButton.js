import styled from 'styled-components'

const PreButton = () => {
  return (
    <Button>
      Next Page 👉
    </Button>
  )
}

export default PreButton

const Button = styled.button`
  margin-top: 10px;
  background-color: #353535;
  color: #eee;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    color: #151515;
    background-color: #eee;
  }
`