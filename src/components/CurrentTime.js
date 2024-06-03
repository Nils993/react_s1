function CurrentTime() {
  const now = new Date().toLocaleDateString();
  return (
    <div>
      <h1 className="heading">Текущее время {now}</h1>
    </div>
  );
}

export default CurrentTime;
