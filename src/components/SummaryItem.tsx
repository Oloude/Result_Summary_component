 import memoryIcon from '../assets/icon-memory.svg'
 import reactionIcon from '../assets/icon-reaction.svg'
 import verbalIcon from '../assets/icon-verbal.svg'
 import visualIcon from '../assets/icon-visual.svg'

 type ItemProps = {
    score : number,
    category : string
 }

function SummaryItem({score, category} : ItemProps) {
  return (
    <div className={`${
                category === 'Memory' ? ' bg-oYellow' :
                category === 'Reaction' ? ' bg-lightRed' :
                category === 'Verbal' ? 'bg-gTeal' : 
                category === 'Visual ' ? 'bg-cBlue' : 
                ''
                  } bg-opacity-10 flex justify-between py-4 rounded-lg px-4 items-center`}>
        <div className='flex gap-3 items-center'>
            <img src={
                category === 'Memory' ? memoryIcon :
                category === 'Reaction' ? reactionIcon :
                category === 'Verbal' ? verbalIcon :
                category === 'Visual' ? visualIcon  :
                ''
            } alt="icon" />
            <h4 className={`${
                category === 'Memory' ? ' text-oYellow' :
                category === 'Reaction' ? ' text-lightRed' :
                category === 'Verbal' ? 'text-gTeal' : 
                category === 'Visual' ? 'text-cBlue' :
                ''
                } text-base font-medium`}  >{category}</h4>
        </div>
        <div className='text-dGBlue text-base '><span className='text-[hsla(241, 72%, 46%, 0)] font-bold'>{score}</span> / 100</div>
    </div>
  )
}

export default SummaryItem