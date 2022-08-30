import 'assets/CSS/Loading.css';
import loadingIcon from 'assets/ICON/icon-loading.svg';

function Loading() {
  return (
    <section id="loading-container">
      <div id="loading-icon">
        <img src={loadingIcon} alt="" />
      </div>
      <div id="loading-text">LOADING</div>
    </section>
  );
}

export default Loading;
