export interface Imetrics {
  common: {
    padding: number;
  };
  button: {
    height: number;
    padding: number;
  };
  card: {
    padding: number;
    borderRadius: number;
  };
  badge: {
    size: number;
  };
  deviceFrame: {
    borderRadius: number;
    mobile: { height: number; width: number };
    desktop: { height: number; width: number };
  };
}

const metrics: Imetrics = {
  common: {
    padding: 10,
  },
  button: {
    height: 40,
    padding: 15,
  },
  card: {
    padding: 30,
    borderRadius: 30,
  },
  badge: {
    size: 40,
  },
  deviceFrame: {
    borderRadius: 30,
    mobile: { height: 397, width: 183.95 },
    desktop: { height: 244, width: 375 },
  },
};

export default metrics;
