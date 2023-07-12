import React, { ReactNode, useEffect } from 'react';

interface ChangingProgressProviderProps {
  interval?: number;
  values: any[];
  children: (value: any) => ReactNode;
}

interface ChangingProgressProviderState {
  valuesIndex: number;
  isAnimationFinished: boolean;
}

class ChangingProgressProvider extends React.Component<
  ChangingProgressProviderProps,
  ChangingProgressProviderState
> {
  static defaultProps: Partial<ChangingProgressProviderProps> = {
    interval: 1000,
  };

  state: ChangingProgressProviderState = {
    valuesIndex: 0,
    isAnimationFinished: false,
  };

  componentDidMount() {
    const { values, interval } = this.props;
    const totalValues = values.length;

    const animationInterval = setInterval(() => {
      this.setState((prevState): any => {
        const nextIndex = prevState.valuesIndex + 1;

        if (nextIndex >= totalValues) {
          clearInterval(animationInterval);
          return {
            isAnimationFinished: true,
          };
        }

        return {
          valuesIndex: nextIndex,
        };
      });
    }, interval);
  }

  render() {
    const { values, children } = this.props;
    const { valuesIndex, isAnimationFinished } = this.state;

    if (isAnimationFinished) {
      return children(values[values.length - 1]);
    }

    return children(values[valuesIndex]);
  }
}

export default ChangingProgressProvider;
