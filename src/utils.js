const compound = ({ principle, time, rate, number }) => {
  return principle * Math.pow(1 + rate / number, number * time);
};

export { compound };
