module.exports = {
    nets: {
        r1: 'r1',
        r2: 'r2'
    },
    params: {
        class: 'S', 
    },
    body: p => {
	    const standard = `
      (footprint "kbd:SK6812MINI-E" (layer "F.Cu")
      (tedit 62C54C3D) (tstamp 33086112-67f9-4e70-bc8f-c5eff1e5957e)
	    ${p.at /* parametric position */}

      (fp_poly (pts (xy 2.8 -1.4) (xy 2.2 -1.4) (xy 2.2 -2)) (layer F.SilkS) (width 0.1))
      (fp_line (start 1.6 -1.4) (end 1.6 1.4) (layer Cmts.User) (width 0.12))
      (fp_line (start 1.6 1.4) (end -1.6 1.4) (layer Cmts.User) (width 0.12))
      (fp_line (start -1.6 1.4) (end -1.6 -1.4) (layer Cmts.User) (width 0.12))
      (fp_line (start -1.6 -1.4) (end 1.6 -1.4) (layer Cmts.User) (width 0.12))
      (fp_line (start 1.7 -1.5) (end 1.7 1.5) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 1.7 1.5) (end -1.7 1.5) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -1.7 1.5) (end -1.7 -1.5) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -1.7 -1.5) (end 1.7 -1.5) (layer Edge.Cuts) (width 0.12))
      (pad "1" smd rect (at -2.55 0.75) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask"))
      (pad "2" smd rect (at -2.55 -0.75) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask"))
      (pad "4" smd rect (at 2.55 0.75) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask"))
      (pad "3" smd roundrect (at 2.55 -0.75) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25))
      )
	
	      `
	    return standard
	}
}
