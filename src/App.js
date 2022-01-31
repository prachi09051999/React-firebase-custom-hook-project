import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useRequest from './hooks/use-httpRequest';

function App() {
  const [tasks, setTasks] = useState([]);

  const {isLoading,error, sendHttp} = useRequest();

  useEffect(() => {
    const applyMethod = (data) => {
      const loadedTasks = [];
  
        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
  
        setTasks(loadedTasks);
      };
    sendHttp({url:'https://react-http-request-proje-bdcd3-default-rtdb.firebaseio.com/tasks.json'},applyMethod);
  }, [sendHttp]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendHttp}
      />
    </React.Fragment>
  );
}

export default App;
