
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useRequest from '../../hooks/use-httpRequest';

const NewTask = (props) => {
  const {isLoading, error, sendHttp} = useRequest();

  const createTask = (taskText) => {
      const generatedId = taskText.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
  
      props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendHttp({
      url:'https://react-http-request-proje-bdcd3-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      }
    }, createTask.bind(null,taskText));
    // setIsLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch(
    //     'https://react-http-6b4a6.firebaseio.com/tasks.json',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );
  
    //   if (!response.ok) {
    //     throw new Error('Request failed!');
    //   }
  
    //   const data = await response.json();
  
      
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
