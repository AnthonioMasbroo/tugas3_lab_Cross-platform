import { Button, View, Text} from 'react-native';
import React from 'react';

interface ICounter {
    handleIncrement: () => void;
    handleDecrement: () => void;
    handlePassValue: () => void;
    value: number;
}

const Counter = ({
    handleIncrement,
    handleDecrement,
    handlePassValue,
    value,
}: ICounter) => {
    return (
        <View>
            <Text>{value}</Text>
            <Button title="Increment" onPress={handleIncrement} />
            <Button title="Decrement" onPress={handleDecrement} />
            <Button title="Pass Value" onPress={handlePassValue} />
        </View>
    );
};

export default Counter;