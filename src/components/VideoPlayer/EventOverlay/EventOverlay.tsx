import styles from '../styles.module.css';

type EventOverlayProps = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export const EventOverlay: React.FC<EventOverlayProps> = ({ left, top, width, height }) => {
  const style: React.CSSProperties = {
    left: `${left / 2}px`,
    top: `${top / 2}px`,
    width: `${width * 2}px`,
    height: `${height * 2}px`,
    backgroundColor: 'green',
    opacity: 0.5,
  };

  return <div className={styles.overlay} style={style}></div>;
};

export default EventOverlay;
