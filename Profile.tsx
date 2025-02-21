import {View, Text} from 'react-native';

interface IProfile {
    nama: string;
    count: number;
}


const Profile = ({nama, count}: IProfile) => {
    return (
        <View>
            <Text>Halo nama ku, {nama}! Umur ku, {count} tahun.</Text>
        </View>
    );
};

export default Profile;