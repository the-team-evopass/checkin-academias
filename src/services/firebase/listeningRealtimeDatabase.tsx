import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ref, onValue } from 'firebase/database';
import { addCheckin } from '../../redux/sliceCheckin';
import database from './realtimeDatabaseInit';

interface CheckinProps {
  idUser:number
  image:string
  isChecked:boolean 
  name:string
  time:string
}

const db = database

export default function RealtimeDatabaseListener() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onValue(ref(db, '0/checkin/'), (snapshot) => {

      const data: CheckinProps[] = snapshot.val()

      if (data) {
        const userIdex = parseInt(Object.getOwnPropertyNames(data)[0])
        const timeOfLastCheckin = parseInt(data[userIdex].time)
        const localTime = new Date().getTime()
        const timeDifferenceMilliseconds = localTime - timeOfLastCheckin

        if (timeDifferenceMilliseconds < 20000) {
          dispatch(
            addCheckin({
              idUser: data[userIdex]?.idUser,
              image: data[userIdex]?.image,
              isChecked: data[userIdex]?.isChecked,
              name: data[userIdex]?.name,
              time: data[userIdex]?.time,
            })
          )
        }
      }
    })

    return () => unsubscribe()
  }, [dispatch])

}