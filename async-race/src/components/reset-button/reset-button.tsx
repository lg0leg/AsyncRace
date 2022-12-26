import './reset-button.scss';
import ARApi from '../../utils/async-race-api';

export default function ResetBtn(props: { setResetRace: React.Dispatch<React.SetStateAction<boolean>> }) {
  const Api = new ARApi();

  const resetButtonHandler = () => {
    // console.log('State of winners (on server):');

    // Api.createWinner({
    //   id: 7,
    //   wins: 4,
    //   time: 17,
    // });

    // Api.createWinner({
    //   id: 12,
    //   wins: 3,
    //   time: 21,
    // });

    // Api.getWinners()
    //   .then((body) => {
    //     console.log(body);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    props.setResetRace(true);
    setTimeout(() => {
      props.setResetRace(false);
    }, 50);
  };

  return (
    <button className="reset-button" onClick={resetButtonHandler}>
      Reset
    </button>
  );
}
