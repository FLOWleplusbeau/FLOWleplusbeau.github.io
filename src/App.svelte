<script lang="ts">
</script>

<nav>
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
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    height: 4svh;
    background-color: #fff;
  }

  nav.is-stuck {
    background-color: #a72626;
    color: #fff;
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