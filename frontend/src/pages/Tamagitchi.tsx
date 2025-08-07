import Frame from '../components/Frame'
import { PetMood } from '../types'
import SpriteContent from '../components/SpriteContent'
import CountdownTimer from '../components/CountDownTimer'
import OrangeContainer from '../components/OrangeContainer'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';

const Subtext = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`

function Tamagitchi() {
  const [mood, setMood] = useState<PetMood>(PetMood.Default);
  const [timestamp, setTimestamp] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/commits')
      .then(res => res.json())
      .then(data => {
        const { mood: moodText, latest_commit_unix_ms } = data;

        if (Object.values(PetMood).includes(moodText as PetMood)) {
          setMood(moodText as PetMood);
          setTimestamp(latest_commit_unix_ms);
        } else {
          console.warn("Unexpected mood:", moodText);
        }
      })
      .catch(err => console.error("Error fetching mood data:", err));
  }, []);

  return (
    <div className='wrapper'>
      <Frame
        footer={
          <>
            <Subtext>Time until pet gets sick:</Subtext>
            <OrangeContainer>
              <CountdownTimer startTimestamp={1754597147936} />
            </OrangeContainer>
          </>
        }
      >
        <SpriteContent spriteType={mood} />
      </Frame>
    </div>
  )
}

export default Tamagitchi

// import Frame from '../components/Frame'
// import { PetMood } from '../types'
// import SpriteContent from '../components/SpriteContent'
// import CountdownTimer from '../components/CountDownTimer'
// import OrangeContainer from '../components/OrangeContainer'
// import styled from 'styled-components'
// import React, { useState, useEffect } from 'react';

// const Subtext = styled.div`
//   margin-top: 10px;
//   margin-bottom: 20px;
// `

// function Tamagitchi() {
//   const [mood, setMood] = useState<PetMood | null>(null);
//   const [timestamp, setTimestamp] = useState<number | null>(null);

//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/api/commits')
//       .then(res => res.json())
//       .then(data => {
//         const { mood: moodText, latest_commit_unix_ms } = data;

//         if (Object.values(PetMood).includes(moodText as PetMood)) {
//           setMood(moodText as PetMood);
//           setTimestamp(latest_commit_unix_ms);
//         } else {
//           console.warn("Unexpected mood:", moodText);
//         }
//       })
//       .catch(err => console.error("Error fetching mood data:", err));
//   }, []);

//   return (
//     <div className='wrapper'>
//       <Frame
//         footer={
//           <>
//             <Subtext>Time until pet gets sick:</Subtext>
//             <OrangeContainer>
//               <CountdownTimer startTimestamp={1754597147936} />
//             </OrangeContainer>
//           </>
//         }
//       >
//         {mood ? <SpriteContent spriteType={mood} /> : <p>Loading mood...</p>}
//       </Frame>
//     </div>
//   )
// }

// export default Tamagitchi
