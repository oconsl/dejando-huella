const styles = {
  card: { maxWidth: 800, margin: '0.5em' },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: !flexVariant ? 'row-reverse' : 'row',
  },
  skeleton_main: { height: 350, width: 350 },
  cardContent_text: { textAlign: 'center' },
  skeleton_sub: { mb: 6 },
};

export default styles;
