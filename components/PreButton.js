import styled from 'styled-components'

const PreButton = () => {
  return (
    <Button>
      <span>👉</span>
    </Button>
  )
}

export default PreButton

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
    & span{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 100%;
    padding: 5px;
    &:hover {
      transform: scale(1.05);
      background-color: #f0f0f0
    }
}

`