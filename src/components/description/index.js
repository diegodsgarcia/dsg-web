import React from 'react'
import * as S from './styled'

const Descripiton = ({company, date, technologies}) => {
  return (
    <S.Description>
      <h3 className="title">Tecnology</h3>
      <ul>
        {technologies.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      <h3 className="title">Company</h3>
      <p>{company}</p>
      <h3 className="title">Date</h3>
      <p>{date}</p>
    </S.Description>
  );
}

export default Descripiton