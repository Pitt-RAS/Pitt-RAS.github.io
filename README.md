# Pitt-RAS.github.io

Website for pittras.org

## General Information regarding infrastruture

This website is a Jekyll based (read Ruby) static website. Hosting is done by
Github pages with registar/DNS services provided by NameCheap. As such, maintaining
the website is not too difficult as most content is managed with markdown files.

## Administrating the website

The following is required in order to start administarting the site.

- Write permissions given to your Github username the Pitt-Ras.github.io repo
- Ruby is installed in so manner on your system (rbenv/rvm may of be interest here)
- Jekyll and Bundler is installed `gem install jekyll bundler`

Once those prerequisites are met, you can try running `bundle exec jekyll serve`
If done correctly, you should now have the website being served locally on localhost,
typically at `http://127.0.0.1:4000`

At this point, you can start modifying the website. Additionally, any changes made to the site
should automatically update on the webpage meaning you should be able to see changes occur in
real time.

### Regarding Jekyll dependencies
Given the relative age of the website, you may want to be cautious in updating any dependencies
due to breaking changes of newer versions of dependency. If you so wish to add dependency, please refer to
the Jekyll documentation on how to use Bundler to manage dependencies for a Jekyll project

## Writing/Updating content
As mentioned before, this website content is powered by Markdown. As such, many formatting items
are inherited from Markdown. For more details on writing posts/content with Markdown, please refer
to the README in the `_posts` directory. Also note that for assets like images, you may need to resize
and minimize content in order to optimizing viewing given a specific layout, e.g. gallery images need
to be a specific aspect ratio.

## Deploying
Once you're happy with any changes you made, a simple commit and push to the remote repo on Github will
push changes live to the site. Again, you must have permissions to push to remote, otherwise this fails.

## More questions?
More information can be found with Jekyll's documentation.