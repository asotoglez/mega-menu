import './App.css';
import Menu from './Menu';

function App() {
  return (
    <div className="app">
      <Menu
        elements={[
          {
            id: 1,
            label: 'Art'
          },
          { id: 2, label: 'Design' },
          { id: 3, label: 'Photography' },
          { id: 4, label: 'Courses' },
          { id: 5, label: 'Blog' },
          {
            id: 6,
            label: 'More',
            elements: [
              { id: 1, label: 'Animation' },
              { id: 2, label: 'Science' },
              { id: 3, label: 'Birds' },
              { id: 4, label: 'Murals' },
              { id: 5, label: 'History' },
              { id: 6, label: 'Paper' },
              { id: 7, label: 'Embroidery' },
              { id: 8, label: 'Animals' },
              { id: 9, label: 'Posters and Prints' },
              { id: 10, label: 'Nature' },
              { id: 11, label: 'Books' },
              { id: 12, label: 'Installation' },
              { id: 13, label: 'Light' },
              { id: 14, label: 'Food' },
              { id: 15, label: 'Plants' },
              { id: 16, label: 'Flowers' },
              { id: 17, label: 'Architecture' },
              { id: 18, label: 'Collage' },
              { id: 19, label: 'Humor' },
              { id: 20, label: 'Gifs' },
              { id: 21, label: 'Sculpture' },
              { id: 22, label: 'Anatomy' },
              { id: 23, label: 'Street Art' },
              { id: 24, label: 'Landskapes' },
              { id: 25, label: 'Video' },
              { id: 26, label: 'Painting' },
              { id: 27, label: 'Miniature' },
              { id: 28, label: 'Portraits' },
              { id: 29, label: 'Glass' },
              { id: 30, label: 'Drawing' },
            ],
          },
        ]}
        active={6}
      />
    </div>
  );
}

export default App;
