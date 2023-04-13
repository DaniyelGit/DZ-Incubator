import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
               width: '147px',
               color: '#00CC22',
               '& .MuiSlider-thumb': {
                  position: 'absolute',
                  backgroundColor: '#fff',
                  border: 1,
                  borderColor: '#00CC22',
                  '&::before': {
                     content: '""', // создаем псевдоэлемент, который будет служить внутренним кружком
                     position: 'absolute', // позволяет задавать позицию для псевдоэлемента относительно внешнего кружка
                     top: '50%', // смещаем псевдоэлемент на половину его высоты вверх
                     left: '50%', // смещаем псевдоэлемент на половину его ширины вправо
                     transform: 'translate(-50%, -50%)', // центрируем псевдоэлемент относительно внешнего круга
                     height: 6, // задаем высоту внутреннего кружка
                     width: 6, // задаем ширину внутреннего кружка
                     borderRadius: '50%', // задаем форму для внутреннего круга
                     backgroundColor: '#00CC22', // задаем цвет внутреннего круга
                     boxShadow: 0
                  },
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
               },
               '& .MuiSlider-rail': {
                  backgroundColor: 'black', // цвет неактивной части слайдера
               },
            }}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
