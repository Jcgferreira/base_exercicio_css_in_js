import styled from 'styled-components'

export const StyledForm = styled.form.attrs({})<
  React.FormHTMLAttributes<HTMLFormElement>
>`
  display: flex;
  gap: 1rem;
`

export const BtnPesquisar = styled.button.attrs({})<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  background: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
