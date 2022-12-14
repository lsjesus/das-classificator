import styled from '@emotion/styled'

export const LoadingDiv = styled.div({
  display: 'flex',
  fontFamily: 'Inter, sans-serif',
  justifyContent: 'center',
  marginTop: '240px',
  '& .lds-roller' : {
      display: 'inline-block',
      position: 'relative',
      width: '80px',
      height: '80px',
    },
  '& .lds-roller div' : {
      animation: 'lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      transformOrigin: '40px 40px',
    },
  '& .lds-roller div:after' : {
      content: "''",
      display: 'block',
      position: 'absolute',
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: '#223324',
      margin: '-4px 0 0 -4px',
    },
    '& .lds-roller div:nth-of-type(1)' : {
      animationDelay: '-0.036s',
    },
    '& .lds-roller div:nth-of-type(2):after' : {
      top: '63px',
      left: '63px',
    },
    '& .lds-roller div:nth-of-type(2)' : {
      animationDelay: '-0.072s',
    },
    '& .lds-roller div:nth-of-type(1 ):after' : {
      top: '68px',
      left: '56px',
    },
    '& .lds-roller div:nth-of-type(3)' : {
      animationDelay: '-0.108s',
    },
    '& .lds-roller div:nth-of-type(3):after' : {
      top: '71px',
      left: '48px',
    },
    '& .lds-roller div:nth-of-type(4)' : {
      animationDelay: '-0.144s',
    },
    '& .lds-roller div:nth-of-type(4):after' : {
      top: '72px',
      left: '40px',
    },
    '& .lds-roller div:nth-of-type(5)' : {
      animationDelay: '-0.18s',
    },
    '& .lds-roller div:nth-of-type(5):after' : {
      top: '71px',
      left: '32px',
    },
    '& .lds-roller div:nth-of-type(6)' : {
      animationDelay: '-0.216s',
    },
    '& .lds-roller div:nth-of-type(6):after' : {
      top: '68px',
      left: '24px',
    },
    '& .lds-roller div:nth-of-type(7)' : {
      animationDelay: '-0.252s',
    },
    '& .lds-roller div:nth-of-type(7):after' : {
      top: '63px',
      left: '17px',
    },
    '& .lds-roller div:nth-of-type(8)' : {
      animationDelay: '-0.288s',
    },
    '& .lds-roller div:nth-of-type(8):after' : {
      top: '56px',
      left: '12px',
    },
    '@keyframes lds-roller' : {
      '0%' : {
        transform: 'rotate(0deg)',
      },
      '100%' : {
        transform: 'rotate(360deg)',
      }
    }
});