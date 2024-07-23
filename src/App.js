import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    backgroundColor: 'lightblue',
    padding: '20px',
  },
  text: {
    color: 'darkblue',
    fontSize: '18px',
  },
});

function App() {
  return (
    <div {...stylex.props(styles.container)}>
      <p {...stylex.props(styles.text)}>Hello, StyleX!</p>
    </div>
  );
}

export default App;