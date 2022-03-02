import React, { Component } from 'react';
import Image from './Image';

class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        Satu
                        <Image linkGambar='https://cdn.idntimes.com/content-images/post/20200727/64672292-174413450250706-5790588130101832328-n-9b260169e23b328b5c032f723f91d213_600x400.jpg' />
                    </li>
                    <li>
                        Dua
                        <Image linkGambar='https://inibaru.id/media/5100/large/normal/b879e94c-9dfd-4b9d-afa6-4759066cdc60__large.jpg' />
                    </li>
                    <li>
                        Tiga
                        <Image linkGambar='http://kbu-cdn.com/dk/wp-content/uploads/sate-ayam.jpg' />
                    </li>
                    <li>
                        Empat
                        <Image linkGambar='https://www.masakapahariini.com/wp-content/uploads/2019/11/shutterstock_1469046305-780x440.jpg' />
                    </li>
                </ol>
            </div>
        );
    }
}

export default List;