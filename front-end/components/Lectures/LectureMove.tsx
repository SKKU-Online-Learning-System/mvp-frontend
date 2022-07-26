import { setLectures, setAllLectures } from 'feature/lecture/lectureSlice';
import { useAppSelector } from '../../app/hooks';
import { RootState } from 'app/store';

const LectureMove = () => {
    const { lectures } = useAppSelector(
		(state: RootState) => state.lecture,
    );
    
    function showLectures(){
        console.log(lectures)
    }
    return (
        <>
            <button onClick={showLectures}>show</button>
        </>
    )
}

export default LectureMove;
