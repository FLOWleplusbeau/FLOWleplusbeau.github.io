<script lang="ts">
  let scrolled = $state<boolean>(false);
  $effect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? scrolled = true : scrolled = false 
    });
  });
</script>

<nav class:scrolled={scrolled}>
  <a href="/">About</a>
  <a href="/projects">Projects</a>
  <a href="/skills">Skills</a>
  <a href="/contact">Contact</a>
</nav>
<header>
  <h1>Florian Reynaud</h1>
</header>
<section>
  <h2>Welcome to my portfolio</h2>
  <p>I'm a software engineer with a passion for building web applications.</p>
  <p>Check out my projects and skills!</p>
</section>

<style>
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
  }

  a:visited {
    color: #555;
  }

  nav {
    display: flex;
    position: sticky;
    top: 0;
    margin: 0 auto 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    height: 4svh;
    width: 100%;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }

  nav.scrolled {
    top: 1rem;
    width: 500px;
    color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
  }

  header  {
    height: 96svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(to bottom, #000 0%, #fff 100%);
  }

  section  {
    height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>