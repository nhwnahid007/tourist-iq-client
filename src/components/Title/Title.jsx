
import { Typewriter } from 'react-simple-typewriter';

const Title = () => {
    
    return (
        <div>
             <h1 className='py-4 font-lora text-3xl' style={{  margin: 'auto 0', fontWeight: 'normal' }}>
        Life is simple{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
         
          <Typewriter
            words={['Eat', 'Sleep', 'Travel', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
            
          />
        </span>
      </h1>
        </div>
    );
};

export default Title;