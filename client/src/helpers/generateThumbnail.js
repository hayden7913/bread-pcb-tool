import Konva from 'konva';

function createTempElement(elementId) {
  return () => {
    const tempElement = document.createElement('div');
    tempElement.id = elementId;
    document.body.appendChild(tempElement);

    return tempElement;
  };
}

const createTempContainer = createTempElement('container');

export function cropStage(boardLayer) {
  const boardClone = boardLayer.clone();
  const boardCloneAttrs = boardClone.get('.boardGroup')[0].attrs;
  const tempContainer = createTempContainer();
  const croppedStage = new Konva.Stage({
    width: boardCloneAttrs.width + 20,
    height: boardCloneAttrs.height + 20,
  });

  document.body.removeChild(tempContainer);

  boardCloneAttrs.x = 10;
  boardCloneAttrs.y = 10;

  return croppedStage.add(boardClone);
}

export function getCroppedStage(boardLayer) {
  console.log('two')
  const boardClone = boardLayer.clone();
  const boardCloneAttrs = boardClone.get('.boardGroup')[0].attrs;
  const croppedStage = new Konva.Stage({
    width: boardCloneAttrs.width + 20,
    height: boardCloneAttrs.height + 20,
  });

  boardCloneAttrs.x = 10;
  boardCloneAttrs.y = 10;

  return {
    width: croppedStage.getStage().attrs.width,
    height: croppedStage.getStage().attrs.height,
    node: croppedStage.add(boardClone),
  };
}

export default function generateThumbnail(boardLayer) {
  console.log('three')
  // const croppedStage = cropStage(boardLayer);

  const boardClone = boardLayer.clone();
  const boardCloneAttrs = boardClone.get('.boardGroup')[0].attrs;
  const croppedStage = new Konva.Stage({
    width: boardCloneAttrs.width + 20,
    height: boardCloneAttrs.height + 20,
    container: 'container',
  });


  boardCloneAttrs.x = 10;
  boardCloneAttrs.y = 10;
  croppedStage.add(boardClone);

  return croppedStage.toJSON();
}
