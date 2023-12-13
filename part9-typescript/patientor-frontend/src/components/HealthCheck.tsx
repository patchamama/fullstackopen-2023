import { Icon, Card } from 'semantic-ui-react';
import { HealthCheckEntry } from '../types';

const style = { margin: 10 };

export const HealthCheck: React.FC<{ entry: HealthCheckEntry }> = ({
  entry,
}) => {
  let color: 'green' | 'yellow' | 'orange' | 'red';

  switch (entry.healthCheckRating) {
    case 0:
      color = 'green';
      break;
    case 1:
      color = 'yellow';
      break;
    case 2:
      color = 'orange';
      break;
    case 3:
      color = 'red';
      break;
    default:
      color = 'green';
      break;
  }
  console.log('entry: ', entry);
  return (
    <div>
      <Card style={style}>
        <Card.Content>
          {entry.date} <Icon name='user doctor' />
        </Card.Content>
        <Card.Content description={entry.description} />
        <Card.Content extra>
          <Icon name='heart' color={color} />
          diagnose by {entry.specialist}
        </Card.Content>
      </Card>
    </div>
  );
};
