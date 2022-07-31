//rfce

import React from 'react'
import { card, CardContent, Typography} from'@mui/material';


function InfoBox({title, cases, total} ) {
  return (
    <div>
     <card className='infoBox'>
     <CardContent>
       <Typography className="infoBox__title" color="textSecondary"> {title}</Typography>
       <h2 classNme='infoBox__cases'>{cases}</h2>
       <Typography className="infoBox__total" color="textSecondary"> {total}</Typography>

     </CardContent>
     
     </card>
    </div>
  )
}

export default InfoBox;