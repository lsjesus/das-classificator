import styled from '@emotion/styled'

export const InicialInput = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '85vw',
  height: '85vh',
  margin: '0 auto',

  '& .boxFormat' : {
    display: 'flex',
    width: 'fit-content',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px 100px 30px 50px',
    borderRadius: '8px',
    border: 'none',
    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)',


    '& .titleFormat': {
      fontWeight: '700',
      fontSize: '32px',
      color: '#333333'
    },
  
    '& .subTitleFormat': {
      fontWeight: '700',
      fontSize: '22px',
      color: '#333333'
    },
  
    '& .inputFormat': {
      maxWidth: '600px',
      minWidth: '300px',
      width: '100%',
      padding: '8px',
      color: '#333333',
      borderRadius: '8px',
      border: 'none',
      boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)',
    },
  
    '& .buttonFormat': {
      width: '100%',
      maxWidth: '200px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: '#238662',
      borderRadius: '12px',
      border: 'none',
      padding: '10px 8px',
      marginTop: '20px',
      transition: 'all 0.4s',
      
        '&:hover' : {
          cursor: 'pointer',
          backgroundColor: '#253731',
        },
  },
  }
});